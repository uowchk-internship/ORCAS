//package com.example.orcasbackend.service;
//
//import com.example.orcasbackend.entity.EmailDetails;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.mail.SimpleMailMessage;
//import org.springframework.mail.javamail.JavaMailSender;
//import org.springframework.stereotype.Service;
//
//@Service
//public class EmailServices {
//
//    private JavaMailSender javaMailSender;
//
//    @Autowired
//    public EmailServices(JavaMailSender javaMailSender) {
//        this.javaMailSender = javaMailSender;
//    }
//
//    @Value("${spring.mail.username}")
//    private String sender;
//
//    public String sendEmail(EmailDetails details) {
//        SimpleMailMessage mailMessage = new SimpleMailMessage();
//
//        mailMessage.setFrom(sender);
//        mailMessage.setTo(details.getRecipient());
//        mailMessage.setText(details.getMsgBody());
//        mailMessage.setSubject(details.getSubject());
//
//        javaMailSender.send(mailMessage);
//        return "done";
//    }
//
//}
