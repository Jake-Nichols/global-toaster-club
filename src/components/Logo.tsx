import type { SVGProps } from 'react';
import * as React from 'react';

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={200}
    height={200}
    fill="none"
    {...props}
  >
    <path
      fill="#798F98"
      stroke="#1D1D1B"
      strokeMiterlimit={10}
      strokeWidth={2.051}
      d="M97.454 187.908c49.404 0 89.454-40.05 89.454-89.454C186.908 49.05 146.858 9 97.454 9 48.05 9 8 49.05 8 98.454c0 49.404 40.05 89.454 89.454 89.454Z"
    />
    <path
      fill="#000"
      d="M28.1 109.758c-1.066-.43-1.912-1.103-2.54-2.012-.624-.912-.998-2.012-1.117-3.303-.132-1.415.081-2.642.635-3.675.554-1.034 1.392-1.84 2.512-2.414a.931.931 0 0 1 .374-.111.617.617 0 0 1 .533.19c.142.147.224.353.249.617l.145 1.555a1.14 1.14 0 0 1-.104.633c-.092.18-.244.363-.458.548-.66.585-.942 1.382-.85 2.393.09.986.49 1.718 1.198 2.195.71.478 1.67.658 2.884.546 1.214-.112 2.126-.467 2.733-1.067.607-.597.866-1.389.775-2.377a3.79 3.79 0 0 0-.285-1.121 2.602 2.602 0 0 0-.63-.917 1.088 1.088 0 0 0-.307-.211.581.581 0 0 0-.292-.058c-.216.02-.31.175-.282.467l.14 1.499c.028.305-.033.546-.18.724-.15.181-.377.285-.679.313l-.663.061c-.305.028-.546-.033-.724-.183-.18-.15-.285-.376-.313-.679l-.431-4.666c-.028-.302.033-.544.18-.724.15-.18.376-.285.678-.313l5.122-.475c.302-.028.546.033.724.183.18.15.284.376.312.678l.089.948c.058.633-.216.976-.823 1.034-.114.01-.198.043-.249.099a.258.258 0 0 0-.069.198c.013.127.094.254.247.379.414.343.76.787 1.031 1.331.275.543.44 1.13.498 1.763.104 1.125-.089 2.151-.577 3.076-.487.925-1.23 1.679-2.22 2.264-.99.581-2.172.937-3.536 1.064-1.417.132-2.657-.018-3.724-.45l-.005-.002Zm9.217-14.287c-.183.147-.424.203-.729.17l-11.365-1.224c-.302-.033-.529-.14-.676-.323-.147-.18-.203-.424-.17-.726l.152-1.42c.033-.303.14-.529.323-.676.183-.148.424-.203.726-.17l8.353.899c.302.033.546-.023.727-.17.182-.148.29-.371.322-.676l.435-4.207c.033-.302.14-.53.322-.683.183-.153.424-.206.727-.16l1.135.142c.63.094.91.442.846 1.05l-.808 7.5c-.033.303-.14.53-.322.674h.002Zm1.323-12.125c-.822.76-1.803 1.23-2.94 1.415-1.139.185-2.363.076-3.677-.325-1.372-.42-2.474-1.034-3.302-1.845-.828-.81-1.36-1.757-1.593-2.845-.234-1.087-.16-2.25.218-3.49.397-1.3 1.006-2.33 1.83-3.09.823-.759 1.803-1.229 2.941-1.414 1.138-.183 2.363-.076 3.676.325 1.374.42 2.474 1.034 3.303 1.844.828.81 1.359 1.758 1.592 2.845.234 1.088.16 2.251-.216 3.49-.396 1.302-1.005 2.33-1.829 3.087l-.002.003Zm-1.35-6.508c-.473-.714-1.291-1.25-2.46-1.606-1.168-.356-2.144-.368-2.936-.038-.79.33-1.334.98-1.631 1.953-.297.973-.209 1.817.264 2.53.473.717 1.293 1.25 2.46 1.606 1.165.356 2.143.368 2.936.038.792-.33 1.333-.98 1.63-1.953.298-.973.209-1.817-.264-2.53Zm5.406-4.245c-.224.063-.47.022-.737-.125l-9.999-5.543c-.267-.147-.432-.333-.498-.559-.063-.223-.023-.47.125-.736l2.502-4.517c.678-1.222 1.455-2.017 2.337-2.386.879-.368 1.809-.281 2.787.26.543.302.97.665 1.28 1.09.307.424.457.88.45 1.371.002.206.053.335.155.391.089.049.22.02.396-.086a2.851 2.851 0 0 1 1.628-.559c.58-.013 1.171.148 1.77.48 1.012.562 1.596 1.35 1.751 2.365.155 1.016-.132 2.185-.866 3.506l-2.523 4.55c-.147.267-.332.432-.558.495v.003Zm-5.566-6.659c.223-.063.411-.228.558-.495l.785-1.417c.229-.412.32-.773.277-1.088-.043-.315-.22-.559-.53-.731-.3-.166-.595-.186-.885-.056-.29.13-.548.401-.777.81l-.785 1.418c-.147.266-.19.513-.124.736.063.224.228.412.498.56l.248.139c.267.147.514.19.737.124h-.002Zm4.415 2.45c.223-.064.411-.232.559-.496l.942-1.7c.241-.434.333-.818.28-1.153-.054-.335-.25-.594-.582-.78-.323-.178-.64-.2-.953-.07-.312.131-.59.413-.828.848l-.943 1.7c-.147.266-.19.512-.124.736.063.223.231.411.498.559l.416.23c.267.148.514.191.737.125h-.002Zm5.999-5.389a1.428 1.428 0 0 1-.314-.421l-5.925-10.72c-.276-.458-.233-.897.133-1.322l1.717-1.991c.366-.424.792-.531 1.285-.325l11.437 4.328c.157.051.302.135.437.252.297.256.256.607-.125 1.049l-.945 1.097c-.365.425-.797.529-1.3.313l-.696-.272c-.503-.216-.935-.112-1.301.313l-2.589 3c-.365.424-.409.863-.132 1.32l.389.689c.277.457.234.897-.132 1.321l-.932 1.082c-.382.442-.717.539-1.007.29v-.003Zm-.513-7.31a.63.63 0 0 0 .539.162c.196-.033.381-.15.554-.35l.91-1.055c.174-.2.26-.399.258-.595a.636.636 0 0 0-.246-.5.924.924 0 0 0-.338-.19l-2.337-.91c-.417-.157-.711-.137-.887.066a.478.478 0 0 0-.094.358c.01.153.064.32.158.503l1.242 2.205a.944.944 0 0 0 .239.308l.002-.003Zm10.385-3.123c-.23-.028-.441-.162-.63-.404l-7.039-9.008c-.188-.241-.267-.475-.239-.709.028-.23.163-.442.404-.63l1.126-.879c.241-.188.477-.266.709-.238.23.027.441.162.63.403l5.172 6.62c.188.242.398.374.63.404.23.029.467-.05.708-.238l3.32-2.62c.242-.187.478-.269.717-.243.236.025.444.16.622.409l.689.912c.37.515.315.963-.165 1.336l-5.945 4.646c-.241.188-.477.267-.709.24Zm7.032-20.597 9.145-3.907c.562-.239.978-.071 1.25.5l.468 1.044c.132.275.15.524.058.742-.091.219-.28.389-.559.508l-2.233.933c-.28.119-.465.287-.551.505-.086.216-.071.465.048.745l3.303 7.725c.12.28.137.528.048.747-.086.215-.272.386-.551.505l-1.227.523c-.28.12-.529.138-.747.051-.216-.086-.386-.272-.506-.551l-3.302-7.725c-.12-.28-.287-.465-.506-.552-.218-.086-.465-.07-.744.049l-2.218.968c-.28.119-.53.137-.754.053-.224-.084-.389-.27-.496-.554l-.431-1.06c-.226-.594-.059-1.01.5-1.249h.005Zm18.27 6.623a5.529 5.529 0 0 1-2.64-1.92c-.7-.915-1.185-2.046-1.455-3.392-.282-1.408-.261-2.668.059-3.783.32-1.112.904-2.03 1.75-2.75.846-.72 1.905-1.208 3.175-1.462 1.334-.266 2.528-.218 3.585.148s1.936 1.006 2.64 1.92c.7.915 1.186 2.045 1.455 3.392.282 1.407.262 2.667-.059 3.782-.32 1.113-.904 2.03-1.75 2.751-.846.722-1.905 1.207-3.175 1.461-1.334.267-2.528.218-3.585-.147Zm5.091-4.276c.407-.754.488-1.73.25-2.926-.24-1.197-.692-2.063-1.357-2.604-.666-.541-1.497-.711-2.492-.51-.996.2-1.697.678-2.104 1.432-.406.755-.488 1.73-.249 2.927.239 1.196.691 2.062 1.357 2.603.665.541 1.496.712 2.492.511.996-.2 1.697-.676 2.103-1.433Zm4.367 2.406c0-.153.043-.323.122-.513l4.41-11.427c.173-.505.538-.754 1.097-.746l2.629.038c.559.007.918.266 1.075.777l4.029 11.546c.061.152.091.32.089.498-.005.394-.3.587-.884.579l-1.448-.02c-.559-.008-.917-.275-1.075-.796l-.238-.708c-.158-.524-.516-.788-1.075-.795l-3.963-.056c-.559-.008-.925.241-1.097.747l-.277.739c-.173.505-.539.754-1.098.747l-1.427-.02c-.585-.008-.874-.204-.87-.585v-.005Zm5.274-5.088a.64.64 0 0 0 .22.518c.15.13.359.195.626.2l1.39.02c.266.003.474-.055.621-.18a.645.645 0 0 0 .227-.51.957.957 0 0 0-.072-.381l-.805-2.375c-.147-.422-.353-.633-.62-.638a.479.479 0 0 0-.335.158 1.3 1.3 0 0 0-.282.444l-.892 2.37a.93.93 0 0 0-.08.381l.002-.007Zm11.693 2.962c.099.081.178.155.234.226a.926.926 0 0 0 .116.132c.226.272.516.503.872.698a4.31 4.31 0 0 0 1.163.432c.694.153 1.247.178 1.662.074.414-.104.658-.33.734-.678.066-.297-.033-.574-.298-.826-.264-.254-.706-.5-1.328-.742l-1.341-.548c-2.721-1.105-3.846-2.739-3.371-4.898.177-.805.553-1.468 1.13-1.984.577-.518 1.298-.859 2.167-1.027.869-.167 1.824-.134 2.865.095 1.24.271 2.269.792 3.082 1.554.813.762 1.262 1.636 1.346 2.617a1.42 1.42 0 0 1-.025.287.625.625 0 0 1-.3.432.757.757 0 0 1-.551.063l-1.545-.34a1.063 1.063 0 0 1-.437-.186 1.356 1.356 0 0 1-.249-.241 2.067 2.067 0 0 1-.119-.163 2.876 2.876 0 0 0-.815-.726 3.58 3.58 0 0 0-1.113-.44c-.62-.137-1.123-.15-1.504-.038-.381.112-.612.34-.688.689-.133.594.363 1.1 1.481 1.516l1.427.607c1.408.582 2.391 1.268 2.952 2.056.562.787.727 1.714.49 2.781-.18.818-.566 1.491-1.155 2.02-.592.526-1.334.871-2.226 1.031-.891.16-1.88.122-2.959-.114-1.303-.287-2.386-.808-3.247-1.562-.861-.755-1.339-1.606-1.43-2.548a.914.914 0 0 1 .025-.287.66.66 0 0 1 .303-.443.698.698 0 0 1 .533-.078l1.674.368a1.1 1.1 0 0 1 .447.186l-.002.005Zm13.598-6.45 9.128 3.95c.559.241.724.66.495 1.252l-.437 1.057c-.109.285-.277.47-.498.551-.223.084-.475.064-.754-.055l-2.213-.978c-.279-.122-.528-.138-.747-.054-.216.087-.386.27-.508.549l-3.338 7.71c-.122.28-.289.462-.508.548-.218.087-.465.07-.744-.053l-1.225-.53c-.279-.123-.462-.29-.548-.509-.087-.216-.069-.465.053-.744l3.338-7.71c.122-.28.137-.529.053-.744-.086-.216-.269-.386-.548-.508l-2.228-.945c-.28-.122-.465-.293-.556-.511-.092-.219-.072-.467.061-.742l.472-1.041c.274-.572.694-.74 1.252-.496v.003Zm13.109 6.468c.228-.044.47.022.721.195l7.207 4.954c.503.345.584.787.246 1.323l-.642.968c-.163.26-.361.407-.595.447-.236.038-.477-.028-.729-.2l-4.621-3.199c-.251-.172-.493-.236-.721-.195-.229.043-.432.19-.605.442l-.162.236c-.173.251-.239.493-.196.721.043.229.188.43.44.605l3.518 2.416c.503.345.584.787.246 1.323l-.523.795c-.163.26-.361.407-.594.448-.234.038-.478-.028-.73-.201l-3.523-2.444c-.251-.173-.493-.239-.721-.196-.229.044-.432.188-.605.44l-.183.267c-.173.251-.239.492-.196.721.044.229.191.432.442.602l4.644 3.168c.252.173.402.376.45.61.048.233-.02.472-.203.716l-.663.932c-.381.508-.823.592-1.324.247l-7.207-4.954c-.251-.173-.399-.373-.439-.604-.044-.23.023-.47.195-.722l6.476-9.422c.172-.252.373-.399.604-.442l-.007.002Zm2.321 17.45c.003-.235.115-.458.333-.669l8.2-7.964c.219-.213.445-.318.679-.313.233.003.457.115.668.333l3.226 3.32c1.194 1.23 1.832 2.452 1.913 3.666.081 1.215-.399 2.325-1.435 3.333a4.618 4.618 0 0 1-1.68 1.06c-.619.22-1.209.284-1.775.195-.323-.04-.552.005-.689.137a.61.61 0 0 0-.167.376 8.097 8.097 0 0 1-.43 1.718c-.178.472-.475 1.08-.889 1.818-.112.178-.188.29-.234.333-.32.31-.685.252-1.102-.178l-1.075-1.107c-.177-.183-.287-.371-.327-.572a.809.809 0 0 1 .089-.577l.777-1.524c.33-.533.503-1.036.513-1.509.01-.472-.112-.838-.368-1.102l-.663-.684c-.214-.218-.435-.33-.668-.332-.234-.003-.46.101-.679.312l-1.625 1.58c-.219.214-.445.318-.679.313-.233-.003-.457-.115-.668-.333l-.93-.958c-.213-.218-.317-.444-.312-.678l-.003.005Zm7.367-2.643c-.002.234.102.46.313.678l1.021 1.052c.442.455.884.709 1.324.76.439.05.846-.104 1.219-.468.356-.345.511-.731.467-1.158-.043-.427-.282-.864-.713-1.311l-1.05-1.08c-.213-.218-.434-.33-.668-.332-.233-.003-.46.101-.678.312l-.902.877c-.218.213-.33.434-.333.668v.002Zm12.707 22.84c-.038.201-.157.353-.358.463a1.004 1.004 0 0 1-.312.101c-1.324.275-2.546.115-3.671-.48-1.126-.594-2.032-1.542-2.729-2.84-.604-1.13-.886-2.246-.845-3.34.04-1.095.401-2.109 1.077-3.039.675-.93 1.636-1.727 2.88-2.393 1.265-.675 2.475-1.023 3.625-1.039 1.151-.015 2.188.267 3.112.854.925.587 1.69 1.445 2.294 2.576.694 1.3.966 2.573.811 3.823-.153 1.247-.709 2.337-1.667 3.267-.084.086-.17.155-.259.203-.201.107-.396.122-.582.04-.188-.08-.345-.243-.477-.49l-.701-1.31c-.125-.237-.176-.455-.145-.656.028-.203.127-.43.297-.678.272-.404.412-.844.419-1.316.008-.472-.122-.955-.383-1.448-.473-.887-1.121-1.402-1.944-1.555-.823-.152-1.778.064-2.863.646-1.087.581-1.796 1.254-2.126 2.022-.33.767-.262 1.592.213 2.48.265.492.595.87.994 1.132a2.26 2.26 0 0 0 1.305.381c.295-.015.534.023.719.112.183.089.341.251.465.485l.709 1.329c.132.246.178.47.142.67Zm-3.49 3.722c.109-.206.31-.353.602-.445l10.926-3.36c.292-.09.541-.08.747.03.206.11.353.31.444.602l.419 1.367c.089.292.079.54-.03.747-.109.205-.31.355-.602.444l-8.03 2.472c-.292.089-.493.236-.602.445-.109.205-.12.454-.031.746l1.263 4.037c.089.292.081.544-.028.754-.107.214-.307.359-.605.435l-1.097.317c-.615.163-1.011-.048-1.191-.63l-2.218-7.212c-.089-.292-.081-.54.03-.746l.003-.003Zm16.926 19.335c-.145.182-.371.29-.673.322l-6.951.762c-1.781.196-3.206-.157-4.275-1.054-1.07-.9-1.705-2.269-1.908-4.113-.201-1.844.122-3.313.973-4.41s2.167-1.743 3.948-1.938l6.95-.762c.302-.033.546.023.729.17.181.145.29.37.323.673l.152 1.382c.033.302-.023.546-.17.727-.145.183-.371.29-.673.322l-6.704.737c-.884.096-1.542.386-1.974.869-.432.482-.607 1.115-.521 1.897.087.796.394 1.385.922 1.768.529.384 1.232.526 2.116.43l6.704-.737c.303-.033.547.023.73.17.18.145.289.371.322.673l.153 1.382c.033.303-.023.547-.171.73h-.002Zm-12.829 3.718c.181-.147.425-.205.727-.175l11.373 1.159c.302.03.528.137.676.317.147.181.206.424.175.727l-.523 5.136c-.143 1.39-.544 2.429-1.209 3.115-.663.686-1.553.97-2.663.858-.62-.063-1.153-.228-1.605-.498a2.206 2.206 0 0 1-.953-1.082c-.084-.188-.18-.287-.295-.297-.101-.01-.21.069-.33.234a2.862 2.862 0 0 1-1.278 1.153c-.528.239-1.133.325-1.816.257-1.151-.117-1.997-.613-2.54-1.484-.544-.871-.739-2.06-.585-3.564l.529-5.175c.03-.302.137-.528.317-.675v-.005Zm2.716 3.417c-.18.148-.287.374-.318.676l-.198 1.933c-.05.493.016.882.198 1.169.181.287.463.449.841.488.366.038.668-.067.902-.31.236-.244.379-.613.429-1.105l.199-1.934c.03-.302-.028-.546-.176-.726-.147-.181-.373-.287-.675-.318l-.475-.048c-.305-.03-.547.028-.727.175Zm5.022.511c-.18.147-.287.373-.317.676l-.165 1.61c-.049.468.01.836.175 1.11.162.272.422.427.777.463.341.035.62-.064.836-.298.216-.233.348-.584.394-1.051l.165-1.611c.03-.302-.028-.546-.175-.726-.148-.181-.374-.287-.676-.318l-.285-.028c-.302-.03-.546.028-.726.175l-.003-.002Z"
    />
    <path
      fill="#000"
      d="M28.1 109.829c-1.066-.429-1.912-1.102-2.54-2.012-.624-.912-.998-2.012-1.117-3.302-.132-1.415.081-2.642.635-3.676.554-1.034 1.392-1.84 2.512-2.414a.931.931 0 0 1 .374-.111.617.617 0 0 1 .533.19c.142.147.224.353.249.617l.145 1.555a1.14 1.14 0 0 1-.104.633c-.092.18-.244.363-.458.548-.66.585-.942 1.382-.85 2.393.09.986.49 1.718 1.198 2.195.71.478 1.67.658 2.884.546 1.214-.111 2.126-.467 2.733-1.066.607-.597.866-1.39.775-2.378a3.79 3.79 0 0 0-.285-1.121 2.602 2.602 0 0 0-.63-.917 1.063 1.063 0 0 0-.307-.21.583.583 0 0 0-.292-.059c-.216.02-.31.175-.282.468l.14 1.498c.028.305-.033.547-.18.724-.15.181-.377.285-.679.313l-.663.061c-.305.028-.546-.033-.724-.183-.18-.15-.285-.376-.313-.678l-.431-4.667c-.028-.302.033-.544.18-.724.15-.18.376-.285.678-.313l5.122-.475c.302-.027.546.034.724.183.18.15.284.376.312.679l.089.947c.058.633-.216.976-.823 1.034-.114.01-.198.043-.249.099a.258.258 0 0 0-.069.198c.013.127.094.254.247.379.414.343.76.787 1.031 1.331.275.544.44 1.13.498 1.763.104 1.125-.089 2.152-.577 3.076-.487.925-1.23 1.68-2.22 2.264-.99.582-2.172.937-3.536 1.064-1.417.132-2.657-.018-3.724-.449l-.005-.003Zm9.217-14.287c-.183.147-.424.203-.729.17l-11.365-1.224c-.302-.033-.529-.14-.676-.323-.147-.18-.203-.424-.17-.726l.152-1.42c.033-.303.14-.529.323-.676.183-.147.424-.203.726-.17l8.353.9c.302.032.546-.024.727-.171.182-.148.29-.371.322-.676l.435-4.207c.033-.302.14-.53.322-.683.183-.153.424-.206.727-.16l1.135.142c.63.094.91.442.846 1.05l-.808 7.501c-.033.302-.14.528-.322.673h.002Zm1.323-12.125c-.822.76-1.803 1.23-2.94 1.415-1.139.186-2.363.076-3.677-.325-1.372-.42-2.474-1.034-3.302-1.844-.828-.81-1.36-1.758-1.593-2.846-.234-1.087-.16-2.25.218-3.49.397-1.3 1.006-2.33 1.83-3.089.823-.76 1.803-1.23 2.941-1.415 1.138-.183 2.363-.076 3.676.325 1.374.42 2.474 1.034 3.303 1.845.828.81 1.359 1.757 1.592 2.845.234 1.087.16 2.25-.216 3.49-.396 1.3-1.005 2.33-1.829 3.087l-.002.002Zm-1.35-6.508c-.473-.714-1.291-1.25-2.46-1.606-1.168-.355-2.144-.368-2.936-.038-.79.33-1.334.98-1.631 1.954-.297.973-.209 1.816.264 2.53.473.716 1.293 1.25 2.46 1.605 1.165.356 2.143.369 2.936.038.792-.33 1.333-.98 1.63-1.953.298-.973.209-1.816-.264-2.53Zm5.406-4.245c-.224.063-.47.023-.737-.125l-9.999-5.543c-.267-.147-.432-.332-.498-.558-.063-.224-.023-.47.125-.737l2.502-4.517c.678-1.222 1.455-2.017 2.337-2.385.879-.369 1.809-.282 2.787.259.543.302.97.665 1.28 1.09.307.424.457.881.45 1.371.002.206.053.336.155.392.089.048.22.02.396-.087a2.852 2.852 0 0 1 1.628-.559c.58-.012 1.171.148 1.77.48 1.012.562 1.596 1.35 1.751 2.366.155 1.016-.132 2.184-.866 3.505l-2.523 4.55c-.147.267-.332.432-.558.495v.003Zm-5.566-6.658c.223-.064.411-.229.558-.496l.785-1.417c.229-.412.32-.773.277-1.088-.043-.315-.22-.558-.53-.731-.3-.165-.595-.186-.885-.056-.29.13-.548.401-.777.81l-.785 1.418c-.147.267-.19.513-.124.737.063.223.228.411.498.558l.248.14c.267.147.514.19.737.125h-.002Zm4.415 2.448c.223-.063.411-.23.559-.495l.942-1.7c.241-.434.333-.817.28-1.153-.054-.335-.25-.594-.582-.78-.323-.177-.64-.2-.953-.07-.312.131-.59.413-.828.848l-.943 1.7c-.147.266-.19.512-.124.736.063.223.231.411.498.559l.416.231c.267.147.514.19.737.124h-.002Zm5.999-5.388a1.426 1.426 0 0 1-.314-.421l-5.925-10.72c-.276-.458-.233-.897.133-1.322l1.717-1.991c.366-.424.792-.531 1.285-.325l11.437 4.328c.157.051.302.135.437.252.297.257.256.607-.125 1.05l-.945 1.097c-.365.424-.797.528-1.3.312l-.696-.272c-.503-.216-.935-.112-1.301.313l-2.589 3c-.365.424-.409.864-.132 1.32l.389.69c.277.456.234.896-.132 1.32l-.932 1.082c-.382.442-.717.539-1.007.29v-.003Zm-.513-7.31a.63.63 0 0 0 .539.162c.196-.033.381-.15.554-.35l.91-1.055c.174-.2.26-.399.258-.594a.636.636 0 0 0-.246-.5.924.924 0 0 0-.338-.191l-2.337-.91c-.417-.157-.711-.137-.887.066a.478.478 0 0 0-.094.358c.01.153.064.32.158.504l1.242 2.204a.944.944 0 0 0 .239.308l.002-.003Zm10.385-3.123c-.23-.028-.441-.162-.63-.404l-7.039-9.008c-.188-.241-.267-.475-.239-.708.028-.232.163-.442.404-.63l1.126-.88c.241-.187.477-.266.709-.238.23.028.441.162.63.404l5.172 6.62c.188.241.398.373.63.404.23.028.467-.051.708-.239l3.32-2.62c.242-.187.478-.268.717-.243.236.025.444.16.622.409l.689.912c.37.516.315.963-.165 1.336l-5.945 4.647c-.241.188-.477.266-.709.238Zm7.032-20.597 9.145-3.907c.562-.239.978-.07 1.25.5l.468 1.045c.132.274.15.523.058.742-.091.218-.28.388-.559.508l-2.233.932c-.28.12-.465.287-.551.505-.086.216-.071.465.048.745l3.303 7.725c.12.28.137.528.048.747-.086.216-.272.386-.551.505l-1.227.524c-.28.119-.529.137-.747.05-.216-.086-.386-.271-.506-.55l-3.302-7.726c-.12-.28-.287-.465-.506-.551-.218-.087-.465-.071-.744.048l-2.218.968c-.28.12-.53.137-.754.053-.224-.084-.389-.27-.496-.554l-.431-1.059c-.226-.594-.059-1.011.5-1.25h.005Zm18.27 6.623a5.529 5.529 0 0 1-2.64-1.92c-.7-.915-1.185-2.046-1.455-3.392-.282-1.407-.261-2.667.059-3.783.32-1.112.904-2.03 1.75-2.75.846-.72 1.905-1.207 3.175-1.461 1.334-.267 2.528-.219 3.585.147s1.936 1.006 2.64 1.92c.7.915 1.186 2.045 1.455 3.392.282 1.407.262 2.667-.059 3.782-.32 1.113-.904 2.03-1.75 2.752-.846.721-1.905 1.206-3.175 1.46-1.334.267-2.528.219-3.585-.147Zm5.091-4.276c.407-.754.488-1.73.25-2.926-.24-1.197-.692-2.063-1.357-2.604-.666-.54-1.497-.711-2.492-.51-.996.2-1.697.678-2.104 1.432-.406.755-.488 1.73-.249 2.927.239 1.196.691 2.063 1.357 2.604.665.54 1.496.71 2.492.51.996-.2 1.697-.675 2.103-1.433Zm4.367 2.407c0-.153.043-.323.122-.514l4.41-11.426c.173-.506.538-.755 1.097-.747l2.629.038c.559.007.918.267 1.075.777l4.029 11.546c.061.152.091.32.089.498-.005.394-.3.587-.884.58l-1.448-.021c-.559-.008-.917-.275-1.075-.795l-.238-.71c-.158-.522-.516-.787-1.075-.794l-3.963-.056c-.559-.008-.925.241-1.097.747l-.277.739c-.173.505-.539.755-1.098.747l-1.427-.02c-.585-.008-.874-.204-.87-.585v-.005Zm5.274-5.09a.64.64 0 0 0 .22.52c.15.129.359.195.626.2l1.39.02c.266.003.474-.056.621-.18a.645.645 0 0 0 .227-.51.957.957 0 0 0-.072-.382l-.805-2.375c-.147-.422-.353-.633-.62-.638a.479.479 0 0 0-.335.158 1.3 1.3 0 0 0-.282.444l-.892 2.37a.93.93 0 0 0-.08.381l.002-.007Zm11.693 2.963c.099.081.178.155.234.226a.926.926 0 0 0 .116.132c.226.272.516.503.872.699a4.32 4.32 0 0 0 1.163.431c.694.153 1.247.178 1.662.074.414-.104.658-.33.734-.678.066-.297-.033-.574-.298-.826-.264-.254-.706-.5-1.328-.741l-1.341-.55c-2.721-1.104-3.846-2.738-3.371-4.897.177-.805.553-1.468 1.13-1.984.577-.518 1.298-.859 2.167-1.026.869-.168 1.824-.135 2.865.094 1.24.271 2.269.792 3.082 1.554.813.762 1.262 1.636 1.346 2.617a1.42 1.42 0 0 1-.025.287.625.625 0 0 1-.3.432.757.757 0 0 1-.551.063l-1.545-.34a1.063 1.063 0 0 1-.437-.186 1.359 1.359 0 0 1-.249-.24 2.067 2.067 0 0 1-.119-.163 2.876 2.876 0 0 0-.815-.727 3.58 3.58 0 0 0-1.113-.44c-.62-.137-1.123-.15-1.504-.038-.381.112-.612.34-.688.689-.133.594.363 1.1 1.481 1.517l1.427.607c1.408.581 2.391 1.267 2.952 2.055.562.787.727 1.715.49 2.782-.18.817-.566 1.49-1.155 2.019-.592.526-1.334.871-2.226 1.031-.891.16-1.88.122-2.959-.114-1.303-.287-2.386-.808-3.247-1.562-.861-.755-1.339-1.606-1.43-2.548a.914.914 0 0 1 .025-.287.66.66 0 0 1 .303-.442.698.698 0 0 1 .533-.079l1.674.368a1.1 1.1 0 0 1 .447.186l-.002.005Zm13.598-6.45 9.128 3.95c.559.242.724.66.495 1.253l-.437 1.056c-.109.285-.277.47-.498.552-.223.084-.475.063-.754-.056l-2.213-.978c-.279-.122-.528-.138-.747-.054-.216.087-.386.27-.508.55l-3.338 7.709c-.122.28-.289.462-.508.549-.218.086-.465.068-.744-.054l-1.225-.53c-.279-.122-.462-.29-.548-.509-.087-.216-.069-.465.053-.744l3.338-7.71c.122-.28.137-.528.053-.744-.086-.216-.269-.386-.548-.508L121.512 31c-.28-.122-.465-.292-.556-.51-.092-.22-.072-.468.061-.743l.472-1.041c.274-.572.694-.74 1.252-.495v.002Zm13.109 6.467c.228-.042.47.024.721.196l7.207 4.954c.503.346.584.788.246 1.324l-.642.967c-.163.26-.361.407-.595.447-.236.039-.477-.027-.729-.2l-4.621-3.199c-.251-.172-.493-.236-.721-.195-.229.043-.432.19-.605.442l-.162.236c-.173.252-.239.493-.196.722.043.228.188.429.44.604l3.518 2.416c.503.346.584.788.246 1.324l-.523.795c-.163.259-.361.406-.594.447-.234.038-.478-.028-.73-.2l-3.523-2.445c-.251-.172-.493-.238-.721-.195-.229.043-.432.188-.605.44l-.183.266c-.173.251-.239.493-.196.721.044.229.191.432.442.602l4.644 3.168c.252.173.402.376.45.61.048.234-.02.472-.203.716l-.663.933c-.381.508-.823.591-1.324.246l-7.207-4.954c-.251-.172-.399-.373-.439-.604-.044-.229.023-.47.195-.722l6.476-9.422c.172-.251.373-.399.604-.442l-.007.003Zm2.321 17.45c.003-.233.115-.457.333-.668l8.2-7.964c.219-.213.445-.317.679-.312.233.002.457.114.668.333l3.226 3.32c1.194 1.23 1.832 2.451 1.913 3.666.081 1.214-.399 2.324-1.435 3.332a4.617 4.617 0 0 1-1.68 1.06c-.619.22-1.209.284-1.775.195-.323-.04-.552.005-.689.138a.61.61 0 0 0-.167.376 8.097 8.097 0 0 1-.43 1.717c-.178.472-.475 1.08-.889 1.819-.112.177-.188.29-.234.332-.32.31-.685.252-1.102-.177l-1.075-1.108c-.177-.183-.287-.37-.327-.572a.808.808 0 0 1 .089-.576l.777-1.524c.33-.534.503-1.037.513-1.51.01-.472-.112-.838-.368-1.102l-.663-.683c-.214-.219-.435-.33-.668-.333-.234-.003-.46.102-.679.312l-1.625 1.58c-.219.214-.445.318-.679.313-.233-.003-.457-.114-.668-.333l-.93-.958c-.213-.218-.317-.444-.312-.678l-.003.005Zm7.367-2.642c-.002.234.102.46.313.679l1.021 1.051c.442.455.884.71 1.324.76.439.05.846-.104 1.219-.468.356-.345.511-.731.467-1.158-.043-.427-.282-.864-.713-1.31l-1.05-1.08c-.213-.219-.434-.33-.668-.333-.233-.003-.46.101-.678.312l-.902.877c-.218.213-.33.434-.333.668v.002Zm12.707 22.841c-.038.2-.157.353-.358.462a1.004 1.004 0 0 1-.312.102c-1.324.274-2.546.114-3.671-.48-1.126-.595-2.032-1.543-2.729-2.84-.604-1.131-.886-2.246-.845-3.341.04-1.095.401-2.109 1.077-3.038.675-.93 1.636-1.728 2.88-2.394 1.265-.675 2.475-1.023 3.625-1.038 1.151-.016 2.188.266 3.112.853.925.587 1.69 1.445 2.294 2.576.694 1.3.966 2.573.811 3.823-.153 1.248-.709 2.337-1.667 3.267a1.1 1.1 0 0 1-.259.203c-.201.107-.396.122-.582.04-.188-.08-.345-.243-.477-.49l-.701-1.31c-.125-.236-.176-.455-.145-.656.028-.203.127-.429.297-.678.272-.404.412-.843.419-1.316.008-.472-.122-.955-.383-1.448-.473-.886-1.121-1.402-1.944-1.554-.823-.153-1.778.063-2.863.645-1.087.582-1.796 1.255-2.126 2.022-.33.767-.262 1.593.213 2.48.265.492.595.87.994 1.132a2.26 2.26 0 0 0 1.305.381c.295-.015.534.023.719.112.183.089.341.252.465.485l.709 1.329c.132.246.178.47.142.67Zm-3.49 3.721c.109-.206.31-.353.602-.444l10.926-3.361c.292-.09.541-.079.747.03.206.11.353.31.444.602l.419 1.367c.089.292.079.541-.03.747-.109.206-.31.356-.602.444l-8.03 2.472c-.292.09-.493.236-.602.445-.109.206-.12.454-.031.747l1.263 4.036c.089.292.081.544-.028.755-.107.213-.307.358-.605.434l-1.097.318c-.615.162-1.011-.049-1.191-.63l-2.218-7.213c-.089-.292-.081-.54.03-.746l.003-.003Zm16.926 19.335c-.145.183-.371.29-.673.322l-6.951.762c-1.781.196-3.206-.157-4.275-1.054-1.07-.9-1.705-2.268-1.908-4.113-.201-1.844.122-3.312.973-4.41.851-1.097 2.167-1.742 3.948-1.938l6.95-.762c.302-.033.546.023.729.17.181.145.29.371.323.673l.152 1.382c.033.303-.023.546-.17.727-.145.183-.371.29-.673.322l-6.704.737c-.884.097-1.542.386-1.974.869-.432.483-.607 1.115-.521 1.897.087.796.394 1.385.922 1.769.529.383 1.232.525 2.116.429l6.704-.737c.303-.033.547.023.73.17.18.145.289.371.322.674l.153 1.382c.033.302-.023.546-.171.729h-.002Zm-12.829 3.719c.181-.148.425-.206.727-.176l11.373 1.159c.302.03.528.137.676.317.147.181.206.425.175.727l-.523 5.136c-.143 1.39-.544 2.429-1.209 3.115-.663.686-1.553.97-2.663.859-.62-.064-1.153-.229-1.605-.498-.452-.27-.77-.63-.953-1.083-.084-.188-.18-.287-.295-.297-.101-.01-.21.069-.33.234a2.862 2.862 0 0 1-1.278 1.153c-.528.239-1.133.325-1.816.257-1.151-.117-1.997-.612-2.54-1.484-.544-.871-.739-2.06-.585-3.564l.529-5.175c.03-.302.137-.528.317-.675v-.005Zm2.716 3.416c-.18.148-.287.374-.318.676l-.198 1.933c-.05.493.016.882.198 1.169.181.287.463.45.841.488.366.038.668-.066.902-.31.236-.244.379-.612.429-1.105l.199-1.933c.03-.303-.028-.547-.176-.727-.147-.18-.373-.287-.675-.318l-.475-.048c-.305-.03-.547.028-.727.175Zm5.022.511c-.18.147-.287.374-.317.676l-.165 1.61c-.049.468.01.836.175 1.111.162.271.422.426.777.462.341.035.62-.064.836-.297.216-.234.348-.585.394-1.052l.165-1.611c.03-.302-.028-.546-.175-.726-.148-.181-.374-.287-.676-.318l-.285-.028c-.302-.03-.546.028-.726.176l-.003-.003Zm-89.951 58.472 2.202.738-.487 1.459-2.203-.738-1 2.992 2.772.928-.487 1.459-4.377-1.464 3.418-10.213 4.377 1.464-.487 1.459-2.772-.928-.951 2.846-.005-.002Zm7.577-2.667c1.602.374 2.202 1.526 1.81 3.205l-.077.331-1.559-.364.103-.434c.174-.748-.06-1.102-.582-1.225-.524-.123-.89.092-1.067.841-.505 2.156 2.62 3.315 1.92 6.31-.392 1.677-1.456 2.441-3.074 2.062-1.618-.38-2.233-1.534-1.841-3.211l.151-.643 1.56.364-.175.749c-.175.748.092 1.094.615 1.217.523.124.918-.069 1.093-.817.505-2.157-2.621-3.316-1.921-6.311.392-1.677 1.441-2.443 3.044-2.069v-.005Zm3.004.805 5.182.718-.21 1.523-1.751-.244-1.27 9.144-1.676-.233 1.269-9.144-1.751-.243.212-1.524-.005.003Zm5.275 5.323 3.072.198-.1 1.535-3.072-.197.1-1.536Zm7.185-2.974c-.539.01-.872.31-.854 1.079l.023 1.154-1.6.033-.02-1.046c-.037-1.723.804-2.725 2.466-2.759 1.661-.033 2.543.931 2.579 2.654.072 3.385-3.272 4.716-3.236 6.485 0 .077.003.154.02.231l3.201-.067.031 1.538-4.893.103-.028-1.323c-.067-3.169 3.277-3.762 3.21-6.869-.02-.97-.364-1.223-.902-1.213h.002Zm3.841 1.023c-.208-1.71.574-2.798 2.225-2.998 1.649-.2 2.669.67 2.877 2.38l.675 5.559c.207 1.71-.575 2.797-2.226 2.997-1.649.2-2.669-.669-2.877-2.379l-.674-5.559Zm2.366 5.464c.093.764.464 1.013.998.949.533-.064.836-.395.743-1.159l-.7-5.775c-.092-.764-.464-1.012-.997-.948-.536.064-.836.394-.744 1.159l.7 5.774Zm6.303-8.013c-.526.118-.793.477-.623 1.228l.251 1.126-1.562.351-.228-1.02c-.377-1.682.249-2.831 1.869-3.195 1.621-.364 2.677.41 3.054 2.09.741 3.302-2.272 5.269-1.884 6.994.018.075.033.152.064.224l3.123-.7.336 1.502-4.775 1.069-.289-1.289c-.693-3.093 2.464-4.336 1.784-7.367-.213-.946-.6-1.128-1.125-1.01l.005-.003Zm6.082-1.687c-.51.169-.741.554-.5 1.282l.361 1.095-1.518.502-.328-.992c-.541-1.636-.031-2.841 1.546-3.364 1.577-.52 2.705.144 3.246 1.78 1.062 3.212-1.741 5.469-1.184 7.148.023.075.049.146.087.216l3.039-1.006.482 1.462-4.644 1.536-.415-1.256c-.995-3.008 2.025-4.559 1.048-7.508-.305-.921-.707-1.062-1.218-.892l-.002-.003ZM72.49 127.195s.6 1.679 1.74 2.637c1.14.959 38.127 14.479 43.562 16.46 1.754.64 9.931 4.768 15.078-13.33 0 0 11.463-45.059 9.685-47.482-1.778-2.424-10.533-12.757-13.915-13.53"
    />
    <path
      fill="#fff"
      d="m72.25 125.715-13.032-8.665s-10.938-6.211-7.956-17.418c2.982-11.208 34.14-44.628 34.14-44.628s9.344-7.834 28.423 1.286c19.08 9.12 2.609 81.533 2.609 81.533s-43.026-10.93-44.182-12.108h-.002Z"
    />
    <path
      fill="#160C0D"
      fillRule="evenodd"
      d="m84.82 54.39.041-.034.541.645-.616-.576.034-.037v.002Zm31.614 83.433.822.188-.191.843-.84-.214.209-.817Zm-.637-1.033c.116-.53.278-1.295.481-2.267.411-1.992.978-4.85 1.601-8.307 1.245-6.917 2.701-16.228 3.567-25.814.865-9.598 1.129-19.43 0-27.407-.562-3.986-1.468-7.47-2.791-10.217-1.324-2.745-3.038-4.696-5.195-5.727-9.398-4.493-16.329-4.78-20.86-3.992-2.27.393-3.955 1.06-5.064 1.618-.553.278-.964.533-1.23.71a9.24 9.24 0 0 0-.293.205.481.481 0 0 0-.043.032l-.046.049c-.058.064-.145.156-.26.28a545.116 545.116 0 0 0-4.554 5.009 488.415 488.415 0 0 0-11.02 12.695c-4.073 4.87-8.234 10.078-11.555 14.762-3.347 4.72-5.764 8.796-6.465 11.43-1.401 5.27.455 9.353 2.704 12.167a19.643 19.643 0 0 0 4.436 4.036c.139.09.246.156.318.202.035.024.064.038.081.05l.018.011h.003l.026.018 12.843 8.541h.102l.196.199.044.021c.087.04.214.095.394.165.356.136.86.31 1.5.512 1.273.408 3.037.927 5.133 1.523 4.19 1.187 9.67 2.664 15.119 4.103a2511.325 2511.325 0 0 0 19.797 5.139c.394.101.733.188 1.008.257l.003-.002Zm-57.025-19.025-.015-.009-.1-.061a9.852 9.852 0 0 1-.366-.231c-.31-.203-.744-.501-1.253-.895a21.457 21.457 0 0 1-3.576-3.5c-2.473-3.092-4.598-7.716-3.017-13.654.79-2.968 3.388-7.273 6.72-11.972 3.358-4.737 7.55-9.983 11.636-14.87a493.268 493.268 0 0 1 11.057-12.737 493.922 493.922 0 0 1 3.576-3.946c.428-.469.767-.834.996-1.083.115-.124.202-.22.263-.283.03-.032.052-.055.067-.073l.023-.023.617.576c-.361-.43-.542-.646-.542-.648h.006l.009-.012.029-.023c.023-.02.058-.046.098-.078a7.39 7.39 0 0 1 .368-.26c.318-.215.79-.505 1.41-.817 1.242-.626 3.083-1.35 5.535-1.775 4.91-.851 12.195-.495 21.874 4.134 2.612 1.248 4.557 3.556 5.988 6.518 1.427 2.959 2.365 6.63 2.941 10.712 1.152 8.168.875 18.148.006 27.792-.869 9.655-2.337 19.016-3.584 25.961a335.944 335.944 0 0 1-1.61 8.35 378.946 378.946 0 0 1-.492 2.322c-.058.267-.105.472-.134.611-.014.07-.026.122-.034.157l-.012.052-.822-.186-.209.817-.124-.032-.359-.093-1.37-.35c-1.178-.301-2.866-.732-4.89-1.254a2345.197 2345.197 0 0 1-14.922-3.888c-5.452-1.439-10.944-2.918-15.148-4.111a186.533 186.533 0 0 1-5.188-1.538 31.163 31.163 0 0 1-1.587-.544 6.33 6.33 0 0 1-.52-.22c-.03-.014-.07-.032-.11-.055h-.01l-.043-.029a1.531 1.531 0 0 1-.2-.133l-12.976-8.631-.006.012Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M72.212 126.335s-9.67-7.542-11.361-9.086c-1.691-1.543-10.939-6.21-7.96-17.414C55.875 88.627 85.864 55.14 85.864 55.14s10.513-7.768 29.592 1.352c19.08 9.12 2.606 81.534 2.606 81.534s-38.953-5.371-45.852-11.691h.003Z"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="m85.293 54.512.069-.052.5.677-.627-.561.058-.064Zm32.771 83.514.822.188-.171.756-.767-.105.116-.836v-.003Zm-.654-.944.011-.049c.116-.53.284-1.309.49-2.305.411-1.992.978-4.849 1.601-8.306 1.245-6.917 2.701-16.228 3.567-25.817.865-9.598 1.129-19.43.002-27.407-.561-3.987-1.467-7.473-2.791-10.217-1.323-2.745-3.037-4.696-5.194-5.727-9.392-4.49-16.618-4.798-21.454-4.025-2.423.388-4.261 1.049-5.483 1.607a14.08 14.08 0 0 0-1.37.712c-.15.09-.26.163-.33.209l-.029.02-.02.023c-.058.064-.142.157-.249.281-.22.246-.541.611-.955 1.08-.826.935-2.007 2.285-3.431 3.94a494.838 494.838 0 0 0-10.617 12.717c-3.929 4.878-7.942 10.095-11.156 14.786-3.236 4.725-5.587 8.807-6.291 11.45-2.417 9.086 3.581 13.495 6.546 15.673.487.359.892.657 1.167.903.816.747 3.628 2.994 6.268 5.081a906.529 906.529 0 0 0 3.506 2.759l1.118.875c.133.104.237.185.31.24l.11.084-.519.666.519-.666.752.588-.008.008c.75.527 1.769 1.069 3.022 1.616 1.686.732 3.738 1.45 6.031 2.142 4.586 1.381 10.073 2.638 15.363 3.703a366.167 366.167 0 0 0 14.111 2.531c1.876.301 3.422.535 4.496.692.357.052.661.095.91.133h-.003Zm-45.757-10.11-.07-.055c-.072-.055-.176-.139-.31-.243-.269-.209-.65-.51-1.12-.878-.932-.732-2.194-1.722-3.512-2.762-2.614-2.067-5.486-4.363-6.36-5.159-.18-.165-.493-.388-.892-.675-2.82-2.024-10.07-7.221-7.314-17.58.788-2.959 3.307-7.264 6.529-11.972 3.248-4.742 7.293-9.997 11.234-14.89a501.359 501.359 0 0 1 10.654-12.76 514.903 514.903 0 0 1 3.445-3.954l.959-1.086.252-.284.063-.072.024-.023.628.561a69.674 69.674 0 0 1-.501-.68h.006l.006-.009h.002l.032-.026c.026-.017.061-.043.107-.075.093-.06.226-.148.403-.255.35-.208.863-.492 1.534-.799 1.347-.614 3.33-1.323 5.918-1.737 5.189-.831 12.76-.463 22.447 4.169 2.612 1.248 4.557 3.555 5.988 6.517 1.427 2.96 2.365 6.63 2.941 10.716 1.153 8.167.875 18.147.006 27.794-.869 9.656-2.336 19.016-3.587 25.962a337.773 337.773 0 0 1-1.61 8.35 278.436 278.436 0 0 1-.492 2.322c-.058.266-.104.472-.133.611-.015.069-.026.121-.035.156a.336.336 0 0 1-.009.041v.011h-.003s0 .003-.822-.182l-.116.837h-.029a.389.389 0 0 0-.084-.015l-.33-.046a318.777 318.777 0 0 1-5.77-.88 372.622 372.622 0 0 1-14.178-2.542c-5.313-1.069-10.857-2.34-15.516-3.741-2.328-.701-4.45-1.442-6.219-2.209-1.743-.759-3.205-1.575-4.172-2.458h.006Z"
      clipRule="evenodd"
    />
    <path
      fill="#fff"
      d="M117.78 137.887c-18.698-13.249-36.706-21.107-24.74-48.754 4.505-10.408 12.45-26.905 20.878-32.96 5.043-.523 17.05 15.838 19.78 19.596 2.478 3.413 3.275 5.246 2.586 9.137-2.175 12.273-7.059 47.121-18.504 52.978v.003Z"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M102.736 71.446c-3.578 6.141-6.676 12.832-8.923 18.023-2.956 6.833-4.03 12.372-3.744 17.03.287 4.644 1.929 8.478 4.514 11.903 2.597 3.439 6.15 6.471 10.258 9.488 2.325 1.708 4.78 3.375 7.322 5.104 1.847 1.256 3.744 2.545 5.669 3.903 2.432-1.442 4.635-4.398 6.598-8.399 2.068-4.213 3.802-9.442 5.258-14.905 2.395-8.996 4.01-18.527 5.113-25.059.238-1.407.452-2.675.646-3.767.33-1.864.289-3.15-.081-4.351-.379-1.228-1.124-2.444-2.357-4.143-1.361-1.876-5.026-6.88-8.969-11.34-1.975-2.236-3.999-4.309-5.823-5.783-.912-.738-1.751-1.308-2.493-1.676-.634-.316-1.137-.452-1.52-.46-3.992 2.95-7.938 8.373-11.474 14.438l.006-.006ZM116.477 138a457.987 457.987 0 0 0-5.206-3.579c-2.579-1.754-5.098-3.465-7.423-5.174-4.152-3.048-7.86-6.193-10.605-9.829-2.76-3.651-4.543-7.797-4.853-12.814-.31-5.003.854-10.814 3.88-17.806 2.258-5.218 5.385-11.978 9.013-18.203 3.61-6.198 7.779-11.969 12.148-15.107l.183-.13.223-.024c.86-.09 1.769.186 2.649.62.892.443 1.838 1.094 2.805 1.876 1.931 1.564 4.028 3.718 6.025 5.976 4.002 4.528 7.705 9.586 9.071 11.465 1.245 1.714 2.137 3.121 2.606 4.638.475 1.54.489 3.118.13 5.145-.191 1.077-.402 2.33-.64 3.726-1.103 6.526-2.733 16.159-5.153 25.238-1.468 5.513-3.237 10.86-5.374 15.215-2.122 4.323-4.673 7.808-7.788 9.401l-4.769 2.441 3.081-3.081-.003.006Z"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      d="M106.859 60.152a132.914 132.914 0 0 0-12.68 18.286 131.657 131.657 0 0 0-9.118 19.274c-.515 1.089-1.063 1.309-2.907 1.344-2.649.049-7.316-1.436-7.316-1.436-.356-.166-.73-.423-.767-.782-.102-.932.263-1.68.51-2.299a118.304 118.304 0 0 1 4.2-8.64c1.836-3.416 6.193-11.45 13.822-20.428 1.43-1.683 3.596-4.083 6.237-7.007a3.278 3.278 0 0 1 2.608-1.065l4.887.63c2.039.513 1.387 1.06.524 2.129v-.006Zm-11.042-2.516a151.3 151.3 0 0 0-14.028 17.896A150.476 150.476 0 0 0 71.01 94.484c-.608 1.071-.712 1.72-2.452 1.717-2.505-.006-6.737-1.578-6.737-1.578-.319-.17-.64-.434-.637-.793.008-.93.437-1.66.74-2.273a136.709 136.709 0 0 1 4.937-8.492c2.117-3.353 7.134-11.242 15.348-20 1.54-1.642 3.2-3.324 6.02-6.17.683-.69 1.612-1.074 2.579-1.005l5.194.067c1.865.55.747.637-.185 1.679Z"
    />
    <path
      fill="#000"
      fillRule="evenodd"
      d="M71.06 112.058a1.038 1.038 0 0 0-1.883-.88l.936.452a81.626 81.626 0 0 0-.936-.449v.006l-.005.008-.01.018c-.005.011-.01.029-.02.046a3.165 3.165 0 0 0-.168.568 4.02 4.02 0 0 0-.008 1.433c.2 1.193.941 2.632 2.788 4.079 1.711 1.344 6.208 4.557 10.411 7.435 2.105 1.442 4.152 2.809 5.753 3.819.8.504 1.497.929 2.044 1.233.273.151.522.281.733.377.16.072.455.2.75.217a1.039 1.039 0 0 0 .214-2.064.941.941 0 0 1-.11-.047 7.475 7.475 0 0 1-.576-.298 42.383 42.383 0 0 1-1.943-1.172 201.894 201.894 0 0 1-5.689-3.779c-4.201-2.875-8.648-6.057-10.304-7.357-1.52-1.19-1.923-2.197-2.021-2.791a1.926 1.926 0 0 1 0-.692c.014-.072.029-.124.037-.15l.006-.015v.003Z"
      clipRule="evenodd"
    />
    <path
      fill="#000"
      d="m76.52 127.412-10.87-2.062c-3.181-.645-2.654-1.766-2.39-3.349l1.641-4.152c.915-1.68 2.287-2.366 3.35-2.392l11.419 1.326c1.586.267 2.012 1.124 1.748 2.707l-1.549 5.527a2.913 2.913 0 0 1-3.35 2.392v.003Z"
    />
  </svg>
);

export default Logo;
