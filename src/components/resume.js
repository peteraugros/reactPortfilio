import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="/images/PeterAvatar.jpg"
                alt="picture"
                style={{height: '200px'}}
                className="picture-img"
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Peter Augros</h2>
            <h4 style={{color: 'grey'}}>Aspiring Full Stack Developer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Charismatic and dependable high school teacher with 20 years of experience delivering educational assistance
and instruction to various levels of learners, now commited to learning and growing as a full stack developer. Adept in application
of excellent communication and problem solving skills. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>3700 E Jewell Ave, Denver, CO</p>
            <h5>Phone</h5>
            <p>(303) 668-1940</p>
            <h5>Email</h5>
            <p>peteraugros@gmail.com</p>
            <h5>Web</h5>
            <a href="peteraugros.com">peteraugros.com</a>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={1996}
              endYear={2000}
              schoolName="MA in Philosophy from Universita Pontificia Regina Apostolorum"
              schoolDescription="The Pontifical Athenaeum Regina Apostolorum is an educational institute of the Catholic Church in Rome. The Pontifical Athenaeum is directed by the Congregation of the Legionaries of Christ."
               />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2005}
              endYear={2018}
              jobName="Mullen High School"
              jobDescription="Devised and implemented course instructional plans to teach Philosophy, Theology, Latin, Mathematics,
              Computer Science, Chess, and Creative Writing for thousands of over a period of twenty years, while meeting or
              exceeding district standards. Selected and requisitioned appropriate books and instructional aids to complement
              lesson plans. Assessed students' strengths and weaknesses regularly to provide appropriate methods for
              addressing learning needs. Implemented different technologies to engage students in class instruction and
              diversify approaches. Talked with students in need of extra attention and made plans to assist with concerns.
              Maintained communication with parents Inspired academic success based on belief that all students can
              achieve excellence, regardless of background. Created engaging, inspirational and relevant lesson plans,
              fostering a culture of discovery and provided well-organized classroom structure to help students succeed in
              the program. Evaluated academic performance and social relationships to identify and help struggling
              students. Worked with other teachers for comprehensive approach to education."
              />

              <Experience
                startYear={2000}
                endYear={2005}
                jobName="Youth Pastor at St Thomas Moore Catholic Church"
                jobDescription="Taught and counseled youth ages 10 to 18. Scheduled and managed teams of youth volunteers. Built lasting
                relationships with youth and parents or guardians through youth programs and retreats. Oversaw youth ministry
                budget and tracked all expenses. Shared valuable life experiences with youths aged 10 to 18 to promote positive
                self-esteem and improve social skills. Planned weekly groups as well as special events and overnight retreats.
                Oversaw administration and management of all areas of ministry including facilities. Organized and
                spearheaded community outreach programs, including shadowing and mentor programs focused on helping
                middle school students plan for college or vocational education opportunities and participate in local civic
                processes. Provided spiritual care through visitation, counseling and prayer. Planned and hosted on- and
                off-campus community service activities.
                "
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="Javascript"
                progress={90}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={30}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
