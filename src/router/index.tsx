import { createHashRouter } from "react-router-dom";

import routes from "./routes";

//可传第二个参数，配置base路径，例如{ basename: "/app"}
const router = createHashRouter(routes);

export default router;
