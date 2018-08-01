# Recompose/Powerplug/Powerplug+Adopt

A brief investigation into libraries to manage the complexity of frequent HOC usage. The intent was to

1.  Make state transformation more explicit for heavily composed components
1.  Reduce DOM nested

A similar counter was implemnented using [Recompose](https://github.com/acdlite/recompose), [React-PowerPlug](https://github.com/renatorib/react-powerplug), and [React-Powerplug+React-Adopt](https://github.com/pedronauck/react-adopt)

While some clarity was achieved by switching to a more render prop orientated approach, a similar level of safety could be achieved by having a type sound contract between levels which feels more appealing than leaning on another library.
