from sympy import *

x = Symbol('x')
expr = sympify(input("Enter expression: "))
approach = float(input("Approach? "))
pprint(expr.subs(x, approach + 0.1))
pprint(expr.subs(x, approach + 0.01))
pprint(expr.subs(x, approach + 0.001))
pprint(expr.subs(x, approach - 0.1))
pprint(expr.subs(x, approach - 0.01))
pprint(expr.subs(x, approach - 0.001))
