import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
    return (
        <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="80"
            visible={true}
            wrapperStyle={{marginLeft: "auto", marginRight: "auto"}}
        />
    )
};

export default Loader;