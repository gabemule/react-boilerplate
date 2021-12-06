import {useSelector} from "react-redux";

const useInitialSetting = () => {
  const { isInitialized } = useSelector((state) => ({
    isInitialized: state.InitialSetting.isInitialized,
  }))

  return {
    isInitialized
  }
}

export default useInitialSetting;
