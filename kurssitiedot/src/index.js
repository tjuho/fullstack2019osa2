import React from 'react'
import ReactDOM from 'react-dom'
import Course from './components/Course'



const Courses = ({ courses }) => {
    return (
        <div>
            {courses.map(course => <Course course={course} key={course.id} />)
            }
        </div>
    )
}

const App = () => {
    const courses = [
        {
            name: 'Half Stack -sovelluskehitys',
            id: 1,
            parts: [
                {
                    name: 'Reactin perusteet',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Tiedonvälitys propseilla',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'Komponenttien tila',
                    exercises: 14,
                    id: 3
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewaret',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]
    return (
        <div>
            <Courses courses={courses} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))