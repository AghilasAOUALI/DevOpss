package com.dz.config.security;

import com.dz.domain.User;

import java.util.Date;

public final class JwtUserFactory {

    private JwtUserFactory() {
    }

    public static JwtUser create(User user) {
        return new JwtUser(
                user.getId(),
                user.getLogin(),
                user.getFirstName(),
                user.getLastName(),
                user.getLogin(),
                user.getPassword(),
                null,
                true,
                new Date()
        );

    }
}