const OtherIcon = ({ size = 200, color = "#0590DF" }) => {
  return (
    <svg viewBox="0 0 1024 1024" version="1.1" p-id="1515" width={size} height={size}>
      <path
        d="M800 448h-224V224a224 224 0 1 1 224 224z m0-352a128 128 0 0 0-128 128v128h128a128 128 0 0 0 0-256zM224 1024a224 224 0 0 1 0-448h224v224a224 224 0 0 1-224 224z m128-352H224a128 128 0 1 0 128 128v-128zM0 224a224 224 0 0 1 448 0v224H224a224 224 0 0 1-224-224z m352 0a128 128 0 1 0-128 128h128V224z m672 576a224 224 0 0 1-448 0v-224h224a224 224 0 0 1 224 224z m-352 0a128 128 0 1 0 128-128h-128v128z"
        fill={color}
        p-id="1516"
      ></path>
    </svg>
  );
};

export default OtherIcon;
