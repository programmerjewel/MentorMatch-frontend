
import tutorIcon from '../assets/icons/tutor.svg'
import reviewIcon from '../assets/icons/review.svg'
import teacherIcon from '../assets/icons/teacher.svg'
import subjectIcon from '../assets/icons/subject.svg'

const StatSection = () => {
  return (
    <section className="py-12 w-11/12 mx-auto">
      <h2 className="font-extrabold text-4xl text-violet-600 mb-6 text-center">Discover the Power of TutorFlow in Numbers</h2>
      <div className="grid gap-3 grid-cols-4">
        <div className="flex flex-col justify-center gap-2 border border-gray-300 rounded-md p-3">
          <img src={tutorIcon} className='w-15' alt="" />
          <h3><span>32,000+</span> Experienced Tutors</h3>
          <p>Connect with a vast network of skilled tutors ready to help you succeed.</p>
        </div>
        <div className="flex flex-col justify-center gap-2 border border-gray-300 rounded-md p-3">
          <img src={reviewIcon} className='w-15' alt="" />
          <h3><span>3,000,000+</span> 5-Star Reviews</h3>
          <p>Trusted by millions—our tutors deliver exceptional learning experiences.</p>
        </div>
        <div className="flex flex-col justify-center gap-2 border border-gray-300 rounded-md p-3">
          <img src={subjectIcon} className='w-15' alt="" />
          <h3><span>120+</span> Subjects Taught</h3>
          <p>From languages to academics, explore a wide range of subjects tailored to your needs.</p>
        </div>
        <div className="flex flex-col justify-center gap-2 border border-gray-300 rounded-md p-3">
        <img src={teacherIcon} className='w-15' alt="" />
          <h3 className="font-bold text-xl"><span className="text-violet-600">180+</span> Tutor Nationalities</h3>
          <p>Learn from diverse tutors across the globe, bringing unique perspectives to your education.</p>
        </div>
      </div>
    </section>
  );
};



export default StatSection;