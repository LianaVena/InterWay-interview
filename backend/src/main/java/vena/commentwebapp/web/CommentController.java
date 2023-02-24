package vena.commentwebapp.web;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import vena.commentwebapp.business.CommentService;
import vena.commentwebapp.data.Comment;

import java.util.List;

@RestController
@RequestMapping("/comment")
@CrossOrigin(origins = "http://localhost:4200")
public class CommentController {

  private final CommentService commentService;

  public CommentController(CommentService commentService) {
    this.commentService = commentService;
  }

  @GetMapping("/all")
  public List<Comment> getAllComments() {
    return commentService.getAllComments();
  }

}
