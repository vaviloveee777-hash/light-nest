import './Footer.scss'
import IconBadge from "@/components/shared/IconBadge/index.js";
import {SiGithub} from '@icons-pack/react-simple-icons';
import {SiTelegram} from '@icons-pack/react-simple-icons';
import {Mail} from "lucide-react";

function Footer() {

  return (
    <footer className="footer">
      <div className="footer__info">
        <span> © 2024 Light Nest. All rights reserved. </span>
      </div>
      <div className="footer__social">
        <a
          href="https://github.com/vaviloveee777-hash"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBadge
            icon={<SiGithub size={20} />}
            className="icon-badge--git-hub"
          />
        </a>
        <a
          href="https://t.me/rrezendx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconBadge
            icon={<SiTelegram size={20} />}
            className="icon-badge--telegram"
          />
        </a>
        <a
          href="mailto:vaviloveee777@gmail.com"
        >
          <IconBadge
            icon={<Mail size={20} />}
            className="icon-badge--mail"
          />
        </a>
      </div>
      <div className="footer__links">
        <span> About </span>
        <span> Privacy </span>
        <span> Contact </span>
      </div>
    </footer>
  )
}

export default Footer


