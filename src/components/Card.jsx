function Card({ course }) {
  return (
    <div className="card">
      <img src={course.courseImg} alt="" />
      <div className="time">
        {course.category && (
          <div className="category">
            <i className="fa-solid fa-dashboard"></i>
            <p className="category-name">{course.category}</p>
          </div>
        )}

        {course.duration && (
          <div className="time-duration">
            <i className="fa-solid fa-clock"></i>
            <p>{course.duration}</p>
          </div>
        )}
      </div>

      <div className="course-name my-2 font-bold">{course.name}</div>
      <p className="description my-2">{course.description}</p>

      <div className="cost mt-4">
        <div className="instructor flex items-center gap-2">
          <img
            src={course.instructorImg}
            alt=""
            style={{ width: "40px", height: "40px" }}
            className="rounded-full"
          />
          <p className="instructor-name font-bold">{course.instructor}</p>
        </div>

        <div className="cost flex items-center">
          <p className="old-price line-through description italic">
            {course.oldPrice}
          </p>
          <p className="new-price text-[#49BBBD] font-bold text-xl pl-2">
            {course.newPrice}
          </p>
        </div>
      </div>

      {course.progress && (
        <progress
          className="w-full rounded h-3"
          value={course.progress}
          max="100"
        ></progress>
      )}

      {course.lessonsCompleted && (
        <p className="float-right description">
          Lesson {course.lessonsCompleted} of {course.totalLessons}
        </p>
      )}
    </div>
  );
}

export default Card;
