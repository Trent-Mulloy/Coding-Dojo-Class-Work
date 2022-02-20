package com.mulloy.book_club.respoitories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mulloy.book_club.models.Book;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {

}
