import './IconBadge.scss'

const IconBadge = ({ icon, className = '' }) => {
  return (
    <div className={`icon-badge ${className}`}>
      {icon}
    </div>
  );
}

export default IconBadge;