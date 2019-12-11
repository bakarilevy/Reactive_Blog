package com.aep.EI.ReactiveBlog.ReactiveBlog;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ThisFileNotFoundException extends RuntimeException {

    public ThisFileNotFoundException(String message) {
        super(message);
    }

    public ThisFileNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

}
