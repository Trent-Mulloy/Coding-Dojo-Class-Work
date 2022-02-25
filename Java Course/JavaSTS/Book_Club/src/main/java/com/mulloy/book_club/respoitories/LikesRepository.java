package com.mulloy.book_club.respoitories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.mulloy.book_club.models.BookLikes;

@Repository
public interface LikesRepository extends CrudRepository<BookLikes, Long> {
	
	long countBybook_id(Long book_id);

}
