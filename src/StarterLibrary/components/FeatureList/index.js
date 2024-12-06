import React from 'react';

export default function FeatureList(props) {
    const { block } = props;
    const { title, subtitle } = block.main;
    const features = block.items;
    const { align = 'center' } = block.getBlockProperties();
    const headerClass = align === 'left' ? 'text-left' : 'text-center';

    return (
        <section>
            <header className={headerClass}>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </header>
            <ul>
                {features.map((feature, index) => (
                    <li key={index}>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}