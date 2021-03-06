https://hub.docker.com/repository/docker/thaisrfernandes/quotation-app

# Distribuição de uma aplicação utilizando container Docker
### Objetivo
O objetivo geral desta atividade é empacotar e distribuir uma aplicação real e todas as suas dependências na forma de um container Docker. Os objetivos específicos da atividade incluem a fixação e expansão do conteúdo visto em aula, através do estudo da plataforma Docker, e o entendimento de como aplicar essa tecnologia na prática.
### Descrição
Escolher uma aplicação real para ser distribuída na forma de um container Docker. É importante escolher uma aplicação que possua pelo menos uma dependência. Por exemplo, uma aplicação Java precisa de, pelo menos, uma implementação da JVM instalada para poder executar. Da mesma forma, aplicações em Python, Node.js ou outra linguagem interpretada precisa de, pelo menos, um interpretador instalado.
Uma vez escolhida a aplicação, criar um arquivo Dockerfile para empacotar a aplicação em um container. Caso seja escolhida uma aplicação Web, é necessário configurar a porta TCP utilizada pela aplicação. Para aplicações de linha de comando (ex: programa Java simples), necessário configurar um ENTRYPOINT para permitir executar a aplicação via comando docker run.
O arquivo Dockerfile e todas as dependências necessárias para gerar o container devem ser salvos em um repositório Git público (ex: GitHub, BitBucket, GitLab, etc.) e a imagem docker gerada deve ser disponibilizada no Docker Hub. A entrega da atividade deve ser feita via Moodle. Entregar a URL para o repositório Git com os fontes e a URL para a imagem gerada no Docker Hub.
