import Information from "./Information"
import Success from "./Success"
import Warning from "./Warning"
import Error from "./Error"
type Notificationprops = {
  type :string;
  title: string;
  message: string;
  size: string;
  action: boolean;
};
export default function Notification({type, title, message, size, action}:Notificationprops) {
return (
<>
  {type=="Information"? <Information title={title} message={message} size={size} action={action}/>
  :type=="Success"? <Success title={title} message={message} size={size} action={action}/>
  :type=="Warning"? <Warning title={title} message={message} size={size} action={action}/>
  :type=="Error"?  <Error title={title} message={message} size={size} action={action}/>:""}
</>);
}