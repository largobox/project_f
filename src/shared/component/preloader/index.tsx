import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
    align-items: center;
    height: 100%;
`

const Spinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;
  
  & .path {
    stroke: ${({ theme }) => theme.palette.default.main};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`

type PreloaderPropsT = { className?: string }

const Preloader = (props: PreloaderPropsT) => {
	const { className } = props

	return (
		<Container>
			<Spinner viewBox='0 0 50 50'>
				<circle
					className='path'
					cx='25'
					cy='25'
					r='20'
					fill='none'
					strokeWidth='4'
				/>
			</Spinner>
		</Container>
	)
}

export default styled(Preloader)``
