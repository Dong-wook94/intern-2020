package com.board.project.blockboard.controller;

import com.board.project.blockboard.dto.UserDTO;
import com.board.project.blockboard.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class UserController {

    private UserService userService;

    @Autowired
    UserController(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping("/loginCheck")
    public String loginCheck(HttpServletRequest request, HttpSession session) {
        boolean result = userService.loginCheck(request, session);
        if(result == true){ // 로그인 성공
            // board.jsp로 이동
            return "board";
        } else {            // 로그인 실패
            // 로그인 화면으로 이동

            return "login";
        }
    }
    @RequestMapping("/")
    public String login() {
        return "login";
    }
}
