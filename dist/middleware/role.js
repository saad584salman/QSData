export default function (requiredRoles) {
    return (req, res, next) => {
        if (!req.user || !requiredRoles.includes(req.user.role)) {
            res.status(403).json({ error: 'Forbidden' });
            return;
        }
        next();
    };
}
