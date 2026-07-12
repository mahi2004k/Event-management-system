package com.mahesh.ems.service.impl;

import com.mahesh.ems.dto.request.CategoryRequest;
import com.mahesh.ems.dto.response.CategoryResponse;
import com.mahesh.ems.entity.EventCategory;
import com.mahesh.ems.exception.CategoryAlreadyExistsException;
import com.mahesh.ems.exception.CategoryNotFoundException;
import com.mahesh.ems.mapper.CategoryMapper;
import com.mahesh.ems.repository.EventCategoryRepository;
import com.mahesh.ems.service.interfaces.CategoryService;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {


    private final EventCategoryRepository categoryRepository;

    private final CategoryMapper categoryMapper;


    @Override
    public CategoryResponse createCategory(CategoryRequest request) {


        if(categoryRepository.existsByName(request.getName())){

            throw new CategoryAlreadyExistsException(
                    "Category already exists with name : "
                            + request.getName()
            );
        }


        EventCategory category =
                categoryMapper.toEntity(request);


        EventCategory savedCategory =
                categoryRepository.save(category);


        return categoryMapper.toResponse(savedCategory);
    }



    @Override
    public List<CategoryResponse> getAllCategories() {


        List<EventCategory> categories =
                categoryRepository.findAll();


        return categoryMapper.toResponseList(categories);
    }



    @Override
    public CategoryResponse getCategoryById(Long id) {


        EventCategory category =
                categoryRepository.findById(id)
                        .orElseThrow(
                                () -> new CategoryNotFoundException(
                                        "Category not found with id : " + id
                                )
                        );


        return categoryMapper.toResponse(category);
    }



    @Override
    public CategoryResponse updateCategory(
            Long id,
            CategoryRequest request) {


        EventCategory category =
                categoryRepository.findById(id)
                        .orElseThrow(
                                () -> new CategoryNotFoundException(
                                        "Category not found with id : " + id
                                )
                        );


        categoryMapper.updateEntity(
                request,
                category
        );


        EventCategory updatedCategory =
                categoryRepository.save(category);


        return categoryMapper.toResponse(updatedCategory);
    }




    @Override
    public void deleteCategory(Long id) {


        EventCategory category =
                categoryRepository.findById(id)
                        .orElseThrow(
                                () -> new CategoryNotFoundException(
                                        "Category not found with id : " + id
                                )
                        );


        categoryRepository.delete(category);
    }

}