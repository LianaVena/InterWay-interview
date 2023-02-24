package vena.commentwebapp.web;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import vena.commentwebapp.business.CommentService;
import vena.commentwebapp.data.Comment;
import vena.commentwebapp.util.CommentUtils;

import java.util.List;

@RestController
@RequestMapping("/comment")
@CrossOrigin(origins = "http://localhost:4200, http://localhost:8080")
public class CommentController {

  private final CommentService commentService;

  public CommentController(CommentService commentService) {
    this.commentService = commentService;
  }

  @GetMapping("/all")
  public List<Comment> getAllComments() {
    return commentService.getAllComments();
  }

  @PostMapping(path = "/add", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
  public void addComment(@RequestBody Comment comment) {
    if (!commentService.addComment(comment)) {
      System.out.println(CommentUtils.getCommentNotFilledExceptionMessage(comment));
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, CommentUtils.getCommentNotFilledExceptionMessage(comment));
    }
  }

  @DeleteMapping("/delete")
  public void deleteComment(@RequestBody String pin) {

  }
}
