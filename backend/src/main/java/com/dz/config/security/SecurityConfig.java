package com.dz.config.security;

import com.dz.config.DevOpssConfig;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.access.channel.ChannelProcessingFilter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import javax.annotation.Resource;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private static final Logger logger = LoggerFactory.getLogger(SecurityConfig.class);

    @Autowired
    private JwtAuthenticationEntryPoint unauthorizedHandler;
    @Resource
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtAuthenticationFilter authenticationTokenFilterBean;

    @Autowired
    private DevOpssConfig devOpssConfig;

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Autowired
    public void globalConfig(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {

        // authentification avec utilsateur en mémoire
        /*authenticationManagerBuilder.inMemoryAuthentication()
                .withUser("a")
                .password("a")
                .roles("ADMIN");
        */
        // authentification avec utilsateur en mémoire
        authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(encoder());
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {


        http.cors().and().csrf().disable().
                authorizeRequests()
                .antMatchers("/token/*", "/signup").permitAll()
                .anyRequest().authenticated()
                .and()
                .exceptionHandling().authenticationEntryPoint(unauthorizedHandler)
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        http
                .addFilterBefore(authenticationTokenFilterBean, UsernamePasswordAuthenticationFilter.class);
        http.addFilterBefore(corsFilter(), ChannelProcessingFilter.class);
    }



    @Bean
    public BCryptPasswordEncoder encoder(){
        return new BCryptPasswordEncoder();
    }


    // 1 ére solution Cors Filter
    /*@Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("http://localhost:4200");
            }
        };
    }*/

    @Bean
    @ConditionalOnProperty(name = "devOps.cors.allowed-origins")
    public CorsFilter corsFilter() {
        logger.debug("Registering CORS filter");
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = devOpssConfig.getCors();
        source.registerCorsConfiguration("/token/**", config);
        source.registerCorsConfiguration("/api/**", config);
        final CorsFilter corsFilter = new CorsFilter(source);
        return corsFilter;
    }

}
