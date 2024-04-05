import './image-card.css';
import React from 'react';

export interface ImageCardProps {
    className?: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ className = '' }) => (
    <div className={`${className} image-card`}>
<div>
<img src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg" alt="" />
</div>
<div className="text-content">
<h4 className="text-content">Heading 4
</h4>
<div className="description-container">
<p>This is a paragraph.<a></a>
</p>
</div>
</div></div>
);