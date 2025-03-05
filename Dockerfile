FROM public.ecr.aws/lambda/nodejs:22

COPY . ${LAMBDA_TASK_ROOT}
EXPOSE 5000

CMD [ "server.handler" ]
