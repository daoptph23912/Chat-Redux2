import { Spin } from "antd";

const LoadingErrorr = ({ loading, error }) => {
  return (
    <p className="loading-register">
      {loading ? <Spin /> : error ? <>{error}</> : null}
    </p>
  );
};

export default LoadingErrorr;
