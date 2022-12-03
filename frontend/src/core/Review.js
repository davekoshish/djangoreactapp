import React from 'react'
import "../styles.css"

const Review =()=> {
  return (
    
    
    <div
                  className="tab-pane"
                  id="review"
                  role="tabpanel"
                  aria-labelledby="review-tab"
                >
                  <div className="review-heading">REVIEWS</div>
                  <p className="mb-20">There are no reviews yet.</p>
                  <form className="review-form">
                    <div className="form-group">
                      <label>Your rating</label>
                      <div className="reviews-counter">
                        <div className="rate">
                          <input
                            type="radio"
                            id="star5"
                            name="rate"
                            defaultValue={5}
                          />
                          <label htmlFor="star5" title="text">
                            5 stars
                          </label>
                          <input
                            type="radio"
                            id="star4"
                            name="rate"
                            defaultValue={4}
                          />
                          <label htmlFor="star4" title="text">
                            4 stars
                          </label>
                          <input
                            type="radio"
                            id="star3"
                            name="rate"
                            defaultValue={3}
                          />
                          <label htmlFor="star3" title="text">
                            3 stars
                          </label>
                          <input
                            type="radio"
                            id="star2"
                            name="rate"
                            defaultValue={2}
                          />
                          <label htmlFor="star2" title="text">
                            2 stars
                          </label>
                          <input
                            type="radio"
                            id="star1"
                            name="rate"
                            defaultValue={1}
                          />
                          <label htmlFor="star1" title="text">
                            1 star
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Your message</label>
                      <textarea
                        className="form-control"
                        rows={10}
                        defaultValue={""}
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name
                            className="form-control"
                            placeholder="Name*"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name
                            className="form-control"
                            placeholder="Email Id*"
                          />
                        </div>
                      </div>
                    </div>
                    <button className="round-black-btn">Submit Review</button>
                  </form>
                </div>
  )
}
        

export default Review;
