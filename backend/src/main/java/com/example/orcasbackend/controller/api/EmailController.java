//package com.example.orcasbackend.controller.api;
//
//import com.example.orcasbackend.entity.EmailDetails;
//import com.example.orcasbackend.service.EmailServices;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//@RestController
//@RequestMapping("/api/email")
//public class EmailController {
//
//    private EmailServices emailServices;
//
//    @Autowired
//    public EmailController(EmailServices emailServices) {
//        this.emailServices = emailServices;
//    }
//
//    @PostMapping("/send")
//    public String sendEmail(@RequestBody EmailDetails emailDetails){
//        emailServices.sendEmail(emailDetails);
//
//        return "done";
//    }
//
//}
