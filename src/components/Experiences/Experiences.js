import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styles from './Experiences.module.scss';

const titleStyle = { fontWeight: 700, fontSize: '1.2rem', paddingBottom: '0.5rem' };

function Experiences() {
  return (
    <section className={styles.experiences}>
      <h2>Places I've been</h2>
      <VerticalTimeline lineColor="#FCE555" layout="1-column-left" style={{ margin: 0 }}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#5EBABC', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #5EBABC' }}
          date="Jan 2022 - present"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g id="24 / connection / broadcasting">
                <path
                  id="icon"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.89126 2.56665L5.36557 3.91811C3.89657 5.51979 3 7.65503 3 9.99966C3 12.3443 3.89657 14.4795 5.36557 16.0812L3.89126 17.4327C2.09581 15.4751 1 12.8653 1 9.99966C1 7.134 2.09581 4.52427 3.89126 2.56665ZM20.1087 2.56698C21.9042 4.5246 23 7.13433 23 9.99999C23 12.8657 21.9042 15.4754 20.1087 17.433L18.6344 16.0816C20.1034 14.4799 21 12.3446 21 9.99999C21 7.65536 20.1034 5.52012 18.6344 3.91844L20.1087 2.56698ZM8.72076 22L9.38743 20H14.6126L15.2792 22H17.3874L14.1012 12.1413C14.6559 11.5969 15 10.8386 15 9.99999C15 8.34314 13.6569 6.99999 12 6.99999C10.3431 6.99999 9 8.34314 9 9.99999C9 10.8386 9.3441 11.5969 9.89882 12.1413L6.61257 22H8.72076ZM10.0541 18L10.7208 16H13.2792L13.9459 18H10.0541ZM12.6126 14L12.2751 12.9875C12.1845 12.9958 12.0927 13 12 13C11.9073 13 11.8155 12.9958 11.7249 12.9875L11.3874 14H12.6126ZM13 9.99999C13 10.5523 12.5523 11 12 11C11.4477 11 11 10.5523 11 9.99999C11 9.44771 11.4477 8.99999 12 8.99999C12.5523 8.99999 13 9.44771 13 9.99999ZM19 9.99999C19 8.17639 18.3027 6.51565 17.1601 5.26989L15.6858 6.62135C16.5019 7.51118 17 8.69742 17 9.99999C17 11.3026 16.5019 12.4888 15.6858 13.3786L17.1601 14.7301C18.3027 13.4843 19 11.8236 19 9.99999ZM8.31421 6.62102L6.83989 5.26956C5.69733 6.51532 5 8.17606 5 9.99966C5 11.8233 5.69733 13.484 6.83989 14.7298L8.31421 13.3783C7.4981 12.4885 7 11.3022 7 9.99966C7 8.69709 7.4981 7.51085 8.31421 6.62102Z"
                  fill="black"
                />
              </g>
            </svg>
          }
          iconStyle={{ background: 'white', color: 'black' }}
        >
          <h3 className="vertical-timeline-element-title" style={titleStyle}>
            Imagine Communications
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Full Stack Web Developer</h4>
          <p>
            Tools: C#, .NET, PostgreSQL, Vue, PowerShell, Mercurial, Jira
            <ul>
              <li>
                Collaborating in an agile team of 18 to develop features for a cloud-based
                schedule-execution engine used by broadcasting companies worldwide.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#5EBABC', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #5EBABC' }}
          date="Jul 2021 - Oct 2021"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g id="16 / globe">
                <path
                  id="icon"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24ZM20.7776 13.9975C20.4385 14.0739 20.0841 14.1489 19.7155 14.2216C19.1112 14.3409 18.4982 14.4485 17.8783 14.5429C17.6913 16.4539 17.2935 18.2053 16.7148 19.6677C18.7415 18.4188 20.2356 16.3889 20.7776 13.9975ZM17.9952 11.4862C17.9443 8.78867 17.4931 6.29907 16.7148 4.3323C18.9845 5.73089 20.5862 8.10905 20.9307 10.8774C20.3873 11.0141 19.786 11.1499 19.1347 11.2784C18.7583 11.3527 18.3783 11.4221 17.9952 11.4862ZM14.9996 11.8677C14.0077 11.9538 13.005 12 12 12C10.994 12 9.99158 11.9537 9.00038 11.8675C9.015 9.28805 9.45608 6.89445 10.1967 5.16626C10.8249 3.70056 11.5347 3 12 3C12.4653 3 13.1751 3.70056 13.8033 5.16626C14.5439 6.8945 14.985 9.28819 14.9996 11.8677ZM6.12162 14.5417C5.50576 14.4475 4.89671 14.3403 4.29588 14.2215C3.92296 14.1478 3.56484 14.0717 3.22171 13.9942C3.763 16.387 5.25757 18.4183 7.28523 19.6677C6.70641 18.205 6.3085 16.4531 6.12162 14.5417ZM6.00486 11.4846C6.0559 8.78771 6.50708 6.29869 7.28523 4.3323C5.01759 5.72961 3.4167 8.10471 3.07027 10.8699C3.67847 11.0165 4.35269 11.1746 4.87786 11.2785C5.25029 11.3521 5.62611 11.421 6.00486 11.4846ZM14.815 14.8926C13.8844 14.9627 12.9444 15 12 15C11.0548 15 10.115 14.9627 9.18498 14.8924C9.38201 16.3905 9.72985 17.7443 10.1967 18.8337C10.8249 20.2994 11.5347 21 12 21C12.4653 21 13.1751 20.2994 13.8033 18.8337C14.2701 17.7444 14.618 16.3906 14.815 14.8926Z"
                  fill="black"
                />
              </g>
            </svg>
          }
          iconStyle={{ background: 'white', color: 'black' }}
        >
          <h3 className="vertical-timeline-element-title" style={titleStyle}>
            International Hub
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Web Developer</h4>
          <p>
            Tools: React (Bootstrap & Styleguidist), Sass, Jest, ESLint
            <ul>
              <li>
                - Headed the development of the redesigned website to serve 1600+ community members.
              </li>
              <li>
                - Transformed design mocks into a fully functional single-page application using a
                reusable, modular, component architecture.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#5EBABC', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #5EBABC' }}
          date="Jan 2021 - Apr 2021"
          icon={
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g id="24 / basic / glasses">
                <path
                  id="icon"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M1 13C0.447715 13 0 12.5523 0 12C0 11.4477 0.447715 11 1 11H1.41604C2.1876 9.2341 3.94968 8 6 8C7.8244 8 9.42059 8.97712 10.2938 10.4366C10.7845 10.158 11.3765 10 12 10C12.6235 10 13.2155 10.158 13.7062 10.4366C14.5794 8.97712 16.1756 8 18 8C20.0503 8 21.8124 9.2341 22.584 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13C23 15.7614 20.7614 18 18 18C15.2386 18 13 15.7614 13 13C13 12.8313 13.0084 12.6645 13.0247 12.5H13C13 12.2966 12.6046 12 12 12C11.3954 12 11 12.2966 11 12.5H10.9753C10.9916 12.6645 11 12.8313 11 13C11 15.7614 8.76142 18 6 18C3.23858 18 1 15.7614 1 13ZM6 16C7.65685 16 9 14.6569 9 13C9 11.3431 7.65685 10 6 10C4.34315 10 3 11.3431 3 13C3 14.6569 4.34315 16 6 16ZM21 13C21 14.6569 19.6569 16 18 16C16.3431 16 15 14.6569 15 13C15 11.3431 16.3431 10 18 10C19.6569 10 21 11.3431 21 13Z"
                  fill="black"
                />
              </g>
            </svg>
          }
          iconStyle={{ background: 'white', color: 'black' }}
        >
          <h3 className="vertical-timeline-element-title" style={titleStyle}>
            UW Mathematics Society
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Web Developer</h4>
          <p>
            Tools: WordPress, Avada
            <ul>
              <li>
                - Spearheaded the development of the MathSoc Cartoons page in collaboration with
                their coordinator, which houses 18 comics created over 3 terms.
              </li>
              <li>
                - Updated website with events targeted to 8,000+ students in the Faculty of
                Mathematics.
              </li>
            </ul>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Experiences;
