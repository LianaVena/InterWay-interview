package vena.commentwebapp.web;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
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

  /**
   * Get endpoint for getting all comments from the database without their pin
   *
   * @return json containing all comments
   */
  @GetMapping("/all")
  public List<Comment> getAllComments() {
    return commentService.getAllComments();
  }

  /**
   * Post endpoint for adding a comment to the database,
   * throws ResponseStatusException when not all fields are filled
   *
   * @param comment Comment object
   */
  @PostMapping("/add")
  public void addComment(@RequestBody Comment comment) {
    if (!commentService.addComment(comment)) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "All fields need to be filled");
    }
  }

  /**
   * Post endpoint for editing a comment,
   * throws ResponseStatusException when not all fields are filled or the pin is incorrect
   *
   * @param comment Comment object
   */
  @PostMapping("/edit")
  public void editComment(@RequestBody Comment comment) {
    if (!commentService.editComment(comment)) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Couldn't edit comment");
    }
  }

  /**
   * Delete endpoint for deleting a comment from the database,
   * throws ResponseStatusException if the pin is incorrect
   *
   * @param id  id of comment in database
   * @param pin pin used for editing or deletion
   */
  @DeleteMapping("/delete")
  public void deleteComment(@RequestParam Long id, @RequestParam String pin) {
    if (!commentService.deleteComment(id, pin)) {
      throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Incorrect pin");
    }
  }
}
