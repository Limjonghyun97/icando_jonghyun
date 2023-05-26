package com.example.demo.controller;

import com.example.demo.domain.category.Category;
import com.example.demo.domain.reviewBoard.ReviewBoard;
import com.example.demo.service.CategoryService;
import com.example.demo.service.ReviewBoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping("v1/search/categoryList")
    public List<Category> getCategoryAll(){
        List<Category> list = categoryService.getCategoryListAll();
        return list;
    }
}
