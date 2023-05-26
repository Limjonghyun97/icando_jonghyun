package com.example.demo.service;

import com.example.demo.domain.category.Category;
import com.example.demo.domain.category.CategoryRepository;
import com.example.demo.domain.reviewBoard.ReviewBoard;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@RequiredArgsConstructor
@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;

    @Transactional
    public List<Category> getCategoryListAll(){
        return  categoryRepository.findAll();
    }
}
