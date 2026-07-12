package com.mahesh.ems.exception;

public class BookingLimitExceededException extends RuntimeException {

    public BookingLimitExceededException(String message) {
        super(message);
    }
}