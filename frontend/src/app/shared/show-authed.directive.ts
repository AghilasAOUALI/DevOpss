import {Directive, Input, OnInit, SimpleChanges, TemplateRef, ViewContainerRef} from '@angular/core';
import {LoginService} from "../login/login.service";


@Directive({selector: '[appShowAuthed]'})
export class ShowAuthedDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private loginService: LoginService,
    private viewContainer: ViewContainerRef
  ) {
  }

  condition: boolean;

  ngOnInit() {
    this.loginService.isAuthenticated.subscribe(
      (isAuthenticated) => {
        if (isAuthenticated && this.condition || !isAuthenticated && !this.condition) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      }
    );
  }

  @Input() set appShowAuthed(condition: boolean) {
      this.condition = condition;
  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}
