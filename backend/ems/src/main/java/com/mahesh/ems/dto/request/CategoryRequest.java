package com.mahesh.ems.dto.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class CategoryRequest {


    @NotBlank(message = "Category name is required")
    @Size(
            min = 3,
            max = 100,
            message = "Category name must contain 3 to 100 characters"
    )
    private String name;



    @Size(
            max = 500,
            message = "Description cannot exceed 500 characters"
    )
    private String description;



    private String imageUrl;



    private Boolean active = true;

}