import * as React from 'react'
import Spinner from '../spinner/Spinner'

export default class LazyLoading extends React.PureComponent<any, { children?: React.ReactNode }> {
    
    public render() {
        return (
            <React.Suspense fallback={<Spinner/>}>
                {this.props.children}
            </React.Suspense>
        )
    }
}