import { selector, useRecoilValue } from 'recoil'
import { findGender } from 'api/gender'

const genderSelectOptionsSelector = selector({
	key: 'genderSelectOptions',
	get: async ({ get }) => {
		const genders = await findGender()

		return genders
	},
})

function useOption() {
	const options = useRecoilValue(genderSelectOptionsSelector)

	return options
}

export default useOption
