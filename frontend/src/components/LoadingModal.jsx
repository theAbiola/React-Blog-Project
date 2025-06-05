const LoadingModal = () => {
    return (
        <div className="loading-overlay">
            <div className="loading-modal">
                <div className="spinner"></div>
                <p>Fetching data, please wait...</p>
            </div>
        </div>
    );
};

export default LoadingModal;