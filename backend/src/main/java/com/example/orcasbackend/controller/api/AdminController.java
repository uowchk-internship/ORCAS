package com.example.orcasbackend.controller.api;

import com.example.orcasbackend.entity.Material;
import com.example.orcasbackend.service.MaterialServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    private MaterialServices materialServices;

    @Autowired
    public AdminController(MaterialServices materialServices) {
        this.materialServices = materialServices;
    }

    @GetMapping("/check")
    public String checkToken(){
        return "ok";
    }

    @GetMapping("/delete/{id}")
    public String deleteById(@PathVariable String id){
        materialServices.deleteById(id);
        return "done";
    }

    @PostMapping("/update")
    public String updateMaterial(@RequestBody Material material){
        materialServices.saveMaterial(material);
        return "done";
    }

}
