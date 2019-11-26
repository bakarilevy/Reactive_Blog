package com.aep.EI.ReactiveBlog.ReactiveBlog;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Post {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String title;
    private String content;

    public Post(long id, String title, String content) {
        this.id = id;
        this.content = content;
        this.title = title;
    }

    public Post(String title, String content) {
        this.title = title;
        this.content = content;
    }

    public Post(){}

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    public String getTitle()  {
        return title;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
