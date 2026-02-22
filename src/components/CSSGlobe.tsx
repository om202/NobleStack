

import './CSSGlobe.css';

/**
 * Pure CSS 3D rotating sphere — based on iamlark's CodePen (jYzYJg).
 * Zero JS animation cost. Light/dark themed via CSSGlobe.css.
 */

const PLANES = 12;
const SPOKES = 36;
const COLOR_CLASSES = ['a', 'b', 'c', 'd', 'e', 'f'];

export default function CSSGlobe({ className = '' }: { className?: string }) {
    return (
        <div
            className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
            aria-hidden="true"
        >
            <div className="globe-wrapper">
                <div className="globe-sphere">
                    {Array.from({ length: PLANES }, (_, i) => (
                        <div
                            key={`plane-${i}`}
                            className="globe-plane"
                            style={{ transform: `rotateY(${(180 / PLANES) * (i + 1)}deg)` }}
                        >
                            {Array.from({ length: SPOKES }, (_, j) => {
                                const delay = (j <= SPOKES / 2 ? j : SPOKES - j) / (SPOKES / 2);
                                const colorClass = `globe-dot-${COLOR_CLASSES[j % COLOR_CLASSES.length]}`;
                                return (
                                    <div
                                        key={`spoke-${j}`}
                                        className="globe-spoke"
                                        style={{ transform: `rotateZ(${(360 / SPOKES) * (j + 1)}deg)` }}
                                    >
                                        <div
                                            className={`globe-dot ${colorClass}`}
                                            style={{ animationDelay: `${delay}s` }}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
