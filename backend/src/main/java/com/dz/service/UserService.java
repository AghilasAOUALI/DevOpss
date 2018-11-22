package com.dz.service;

import com.dz.domain.User;

import java.util.List;


public interface UserService {

    User createUser(User user);

    User getUser(Long id);

    List<User> getAllUsers();

    User findOne(String login);


}
