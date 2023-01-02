import React from 'react'

export default function Home() {
    const content = {
        padding: '2rem 4rem',
    }

    return (
        <div style={content}>
            <h1 className='display-6'>React Template</h1>
            <p className='text-muted'>
                React website template
            </p>
            <p>
                The source code of the template is in the&nbsp;
                <a href='https://github.com/jevgenij-p/react-template'>jevgenij-p/react-template</a> 
                &nbsp;GitHiub repository.
            </p>
            <p>
                The <b>react-template</b> is a template of a site developed with&nbsp;
                <i>React</i>, <i>Typescript</i>, <i>Express</i>, <i>TypeORM</i> and <i>NodeJs</i>.
            </p>
        </div>
    )
}