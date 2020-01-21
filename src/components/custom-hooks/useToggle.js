import React, {
    useState
} from 'react';

const useToggle = (initValue) => {
    const [value, setValue] = useState(initValue);
    const toggleValue = () => setValue(!value);
    return [value, toggleValue];
}
export default useToggle;