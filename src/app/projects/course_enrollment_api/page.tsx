import PageSection from "@/components/PageSection";
import PageSubSection from "@/components/PageSubSection";
import ProjectPage from "@/components/ProjectPage";

const CourseEnrollmentProjectPage = () => {
    return (
        <>
            <div>
                <ProjectPage
                    title="Course Enrollment API"
                    githubUrl="https://github.com/basdidon/IdentityServicePrototype"
                >
                    <p>
                        &emsp;&emsp;This Course Enrollment project is built with a microservices
                        architecture and follows the Clean Architecture principles across both
                        services:
                    </p>
                    <PageSection title="Sub-Projects">
                        <PageSubSection title="🔑 Identity.Api">
                            <p>
                                &emsp;&emsp;Handles user registration, login, logout, token
                                refreshing, and user data retrieval using JWT. It supports three
                                roles (Admin, Instructor, and Student), role-based access control.
                                This service is designed to work with other microservices by issuing
                                and validating JWT tokens.
                            </p>
                        </PageSubSection>
                        <PageSubSection title="📚 Courses.Api">
                            <p>
                                &emsp;&emsp;Manages all course-related operations, including
                                creating, updating, deleting, and enrolling in courses. It validates
                                tokens issued by Identity.Api and ensures proper access control
                                based on user roles.
                            </p>
                        </PageSubSection>
                    </PageSection>
                    <PageSection title="🧑‍💻 User Use Cases">
                        <PageSubSection title="🌐 Anyone">
                            <ul className="list-disc list-inside ms-6">
                                <li>View a list of available courses</li>
                                <li>Get detailed information for a specific course by ID</li>
                                <li>View the list of enrolled students in a course</li>
                            </ul>
                        </PageSubSection>
                        <PageSubSection title="🔧 Admin">
                            <ul className="list-disc list-inside ms-6">
                                <li>Create courses and assign instructors</li>
                                <li>Update any course details</li>
                                <li>Reassign instructors for specific courses</li>
                                <li>Delete any course</li>
                            </ul>
                        </PageSubSection>
                        <PageSubSection title="👨‍🏫 Instructor">
                            <ul className="list-disc list-inside ms-6">
                                <li>Create, read, update, and delete (CRUD) their own courses</li>
                            </ul>
                        </PageSubSection>
                        <PageSubSection title="🎓 Student">
                            <ul className="list-disc list-inside ms-6">
                                <li>View their enrolled courses</li>
                                <li>Enroll in or un-enroll from a course</li>
                            </ul>
                        </PageSubSection>
                    </PageSection>
                </ProjectPage>
            </div>
        </>
    );
};

export default CourseEnrollmentProjectPage;
