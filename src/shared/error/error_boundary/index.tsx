import React, { PropsWithChildren } from 'react'

type PtopsType = PropsWithChildren<{}>

type StateType = {
    hasError: boolean
}

class ErrorBoundary extends React.Component<PtopsType, StateType> {
    constructor(props: PtopsType) {
        super(props)
        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(error: any) {
        console.error(`ErrorBoundary: `, error)

        return { hasError: true }
    }

    // componentDidCatch(error, errorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        // logErrorToMyService(error, errorInfo);
    // }

    render() {
        if (this.state.hasError) {
            return <h2>Что-то пошло не так =(</h2>
        }

        return this.props.children
    }
}

export default ErrorBoundary
