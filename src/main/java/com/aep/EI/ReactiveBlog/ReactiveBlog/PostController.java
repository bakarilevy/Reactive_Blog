package com.aep.EI.ReactiveBlog.ReactiveBlog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;


@RestController
public class PostController {

    @Autowired
    PostRepository postRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/posts")
    public List<Post> index()  {
        return postRepository.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/posts/{id}")
    public Post show(@PathVariable String id)  {
        long search = Long.parseLong(id);
        return postRepository.findById(search).get();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/posts")
    public void create(@RequestBody Map<String, String> body) {
        Long catchId = Long.parseLong(body.get("id"));
        String catchTitle = body.get("title");
        String catchContent = body.get("content");
        Post newPost = new Post(catchId, catchTitle, catchContent);
        postRepository.save(newPost);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/posts/{id}")
    public void update(@PathVariable String id, Map<String, String> body)  {
        long search = Long.parseLong(id);
        Post post = postRepository.findById(search).get();
        String catchTitle = body.get("title");
        String catchContent = body.get("content");
        post.setContent(catchContent);
        post.setTitle(catchTitle);
        postRepository.save(post);

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/posts/{id}")
    public void delete(@PathVariable String id)  {
        long search = Long.parseLong(id);
        postRepository.deleteById(search);
    }


}
