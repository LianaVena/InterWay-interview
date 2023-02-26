package vena.commentwebapp.util;

import vena.commentwebapp.data.Comment;

public final class CommentUtils {

  private CommentUtils() {
  }

  /**
   * Checks if all fields of comment are filled
   *
   * @param comment Comment object
   * @return true if all fields are filled, false if not
   */
  public static boolean isCommentFilled(Comment comment) {
    return !isNullOrEmpty(comment.getName()) && !isNullOrEmpty(comment.getText()) && !isNullOrEmpty(comment.getPin());
  }

  /**
   * Checks whether String is null or empty
   *
   * @param string String object
   * @return true if is null or empty, false if not
   */
  private static boolean isNullOrEmpty(String string) {
    return string == null || string.isEmpty();
  }
}
