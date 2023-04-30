import { RotatingLines } from 'react-loader-spinner';

const Loader = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <RotatingLines
                strokeColor="#1565c0"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </div>
    )
};

export default Loader;